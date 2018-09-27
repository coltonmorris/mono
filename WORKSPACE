workspace(name = "mono")

### Go Rules
git_repository(
  name = "io_bazel_rules_go",
  commit = "6bee898391a42971289a7989c0f459ab5a4a84dd",  # master as of May 10th, 2018
  remote = "https://github.com/bazelbuild/rules_go.git",
)

# The Bazel buildtools repo contains tools like the BUILD file formatter, buildifier
# This commit matches the version of buildifier in angular/ngcontainer
# If you change this, also check if it matches the version in the angular/ngcontainer
# version in /.circleci/config.yml
BAZEL_BUILDTOOLS_VERSION = "49a6c199e3fbf5d94534b2771868677d3f9c6de9"

http_archive(
    name = "com_github_bazelbuild_buildtools",
    url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BAZEL_BUILDTOOLS_VERSION,
    strip_prefix = "buildtools-%s" % BAZEL_BUILDTOOLS_VERSION,
    sha256 = "edf39af5fc257521e4af4c40829fffe8fba6d0ebff9f4dd69a6f8f1223ae047b",
)

# TYPESCRIPT
local_repository(
    name = "build_bazel_rules_typescript",
    path = "node_modules/@bazel/typescript",
)
load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")
rules_typescript_dependencies()

# SASS
git_repository(
  name = "io_bazel_rules_sass",
  tag = "1.13.4",
  remote = "https://github.com/bazelbuild/rules_sass.git"
)

git_repository(
  name = "angular",
  tag = "6.1.8",
  remote = "https://github.com/angular/angular.git"
)

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

####################################
# Load and install our dependencies downloaded above.

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(
    package_json = ["//:package.json"],
    preserve_symlinks = True,
    node_version = "10.9.0",
    yarn_version = "1.9.2",
)
# yarn_install(
#   name = "angular_deps",
#   package_json = "//:package.json",
#   yarn_lock = "//:yarn.lock"
# )

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()
browser_repositories(
    chromium = True,
    firefox = True,
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace", "check_rules_typescript_version")

ts_setup_workspace()

# Enforce that the version of @bazel/typescript installed by npm is compatible with the rules.
# 0.16.0: tsc_wrapped uses user's typescript version & check_rules_typescript_version
check_rules_typescript_version("0.16.0")

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

#
# Load and install our dependencies from local repositories
#

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()
