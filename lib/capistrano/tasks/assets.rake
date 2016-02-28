# lib/capistrano/tasks/assets.rake

namespace :deploy do
  namespace :assets do

    Rake::Task['deploy:assets:precompile'].clear_actions

    desc 'Precompile assets locally and upload to servers if they are changed'
    task :precompile do
      on roles(:web) do
        begin

          # find the most recent release
          latest_release = capture(:ls, '-xr', releases_path).split[1]

          # precompile if this is the first deploy
          raise PrecompileRequired unless latest_release

          #
          latest_release_path = releases_path.join(latest_release)

          # precompile if the previous deploy failed to finish precompiling
          # execute(:ls, latest_release_path.join('assets_manifest_backup')) rescue raise(PrecompileRequired)
          raise(PrecompileRequired)

          fetch(:assets_dependencies).each do |dep|
            #execute(:du, '-b', release_path.join(dep)) rescue raise(PrecompileRequired)
            #execute(:du, '-b', latest_release_path.join(dep)) rescue raise(PrecompileRequired)

            # execute raises if there is a diff
            execute(:diff, '-Naur', release_path.join(dep), latest_release_path.join(dep)) rescue raise(PrecompileRequired)
          end

          warn("-----Skipping asset precompile, no asset diff found")

          # copy over all of the assets from the last release
          execute(:cp, '-rf', latest_release_path.join('public', fetch(:assets_prefix)), release_path.join('public', fetch(:assets_prefix)))

        rescue PrecompileRequired
          warn("----Running assets precompile")

          rsync_host = host.to_s # this needs to be done outside run_locally in order for host to exist
          run_locally do
            with rails_env: fetch(:stage) do
              execute :bundle, "exec rake assets:precompile"
            end
            #execute "rsync -av --delete ./public/assets/ ubuntu@#{rsync_host}:#{shared_path}/public/assets/"
            execute "rsync -avz --delete -e 'ssh -i #{Dir.pwd}/EC2Confisio.pem' ./public/assets/ ubuntu@#{rsync_host}:#{shared_path}/public/assets/"
            execute "rm -rf public/assets"
            # execute "rm -rf tmp/cache/assets" # in case you are not seeing changes
          end
        end
      end
    end
  end
end