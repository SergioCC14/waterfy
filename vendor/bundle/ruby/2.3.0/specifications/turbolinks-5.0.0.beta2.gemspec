# -*- encoding: utf-8 -*-
# stub: turbolinks 5.0.0.beta2 ruby lib

Gem::Specification.new do |s|
  s.name = "turbolinks".freeze
  s.version = "5.0.0.beta2"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["David Heinemeier Hansson".freeze]
  s.date = "2016-02-23"
  s.email = "david@loudthinking.com".freeze
  s.homepage = "https://github.com/turbolinks/turbolinks-rails".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.0".freeze
  s.summary = "Turbolinks makes navigating your web application faster".freeze

  s.installed_by_version = "2.6.0" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<turbolinks-source>.freeze, [">= 0"])
    else
      s.add_dependency(%q<turbolinks-source>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<turbolinks-source>.freeze, [">= 0"])
  end
end
