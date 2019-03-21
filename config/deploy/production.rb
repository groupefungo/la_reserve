set :rvm_custom_path, '/usr/share/rvm'

role :app, %w{web@rawlings.fungo.ca}
role :web, %w{web@rawlings.fungo.ca}
role :db,  %w{web@rawlings.fungo.ca}

set :rvm_ruby_version, '2.2.3@lareserve'

set :deploy_to, '/home/web/apps/la_reserve_ste_claire'
set :linked_files, %w{config/database.yml config/unicorn/production.rb .env}
