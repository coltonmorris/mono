workspace(name = "mono")

### Go Rules
git_repository(
  name = "io_bazel_rules_go",
  tag = "0.11.2",
  remote = "https://github.com/bazelbuild/rules_go.git",
)

git_repository(
  name = "bazel_gazelle",
  remote = "https://github.com/bazelbuild/bazel-gazelle.git",
  tag = "0.12.0",
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
git_repository(
    name = "build_bazel_rules_typescript",
    tag = "0.20.2",
    remote = "https://github.com/bazelbuild/rules_typescript",
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

yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock"
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")

gazelle_dependencies()

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

# git_repository(
local_repository(
  name = "ts_protoc_gen",
#   # remote = "https://github.com/improbable-eng/ts-protoc-gen",
#   # commit = "53aa49ccb3fa7832934ff1cbf86ec62df1cde4cd",
  # path = "../../improbable-eng/ts-protoc-gen",
  path = "../ts-protoc-gen",
)

## Gorules
go_repository(
  name = "com_github_gocolly_colly",
  commit = "6a6c7848ba3d0690ed9b77a68626f3e0e45493f3",
  importpath = "github.com/gocolly/colly",
)

go_repository(
  name = "org_golang_google_appengine",
  commit = "962cbd1200af94a5a35ba8d512e9f91271b4d01a",
  importpath = "google.golang.org/appengine",
  remote = "https://github.com/golang/appengine",
  vcs = "git",
  )

go_repository(
  name = "com_github_saintfish_chardet",
  commit = "3af4cd4741ca4f3eb0c407c034571a6fb0ea529c",
  importpath = "github.com/saintfish/chardet",
  )

go_repository(
  name = "com_github_puerkitobio_goquery",
  commit = "dc2ec5c7ca4d9aae063b79b9f581dd3ea6afd2b2",
  importpath = "github.com/PuerkitoBio/goquery",
  )

go_repository(
  name = "com_github_kennygrant_sanitize",
  commit = "2e6820834a1f36c626bf19a253b7d3cc060e9b8b",
  importpath = "github.com/kennygrant/sanitize",
  )

go_repository(
  name = "com_github_antchfx_xmlquery",
  commit = "9188d8442369f50d972011092e34175d53e10476",
  importpath = "github.com/antchfx/xmlquery",
  )

go_repository(
  name = "com_github_temoto_robotstxt",
  commit = "e39884099e559e9744ba546c59b12f995ab5b228",
  importpath = "github.com/temoto/robotstxt",
  )

go_repository(
  name = "com_github_gobwas_glob",
  commit = "5ccd90ef52e1e632236f7326478d4faa74f99438",
  importpath = "github.com/gobwas/glob",
  )

go_repository(
  name = "com_github_antchfx_xpath",
  commit = "077bca4d2caaf391ee780136adae00f59153dcd2",
  importpath = "github.com/antchfx/xpath",
  )

go_repository(
  name = "com_github_antchfx_xquery",
  commit = "ad5b8c7a47b007a1cdaf6616ece1f71e94c189a6",
  importpath = "github.com/antchfx/xquery",
  )

go_repository(
  name = "com_github_antchfx_htmlquery",
  commit = "b4407197cfe83ed32ff00763f84809f65b6417c1",
  importpath = "github.com/antchfx/htmlquery",
  )

go_repository(
  name = "com_github_temoto_robotstxt",
  commit = "9e4646fa705336d5b2fa9dddfafbe0a1a965acd7",
  importpath = "github.com/temoto/robotstxt",
  )

go_repository(
  name = "com_github_andybalholm_cascadia",
  commit = "901648c87902174f774fac311d7f176f8647bdaa",
  importpath = "github.com/andybalholm/cascadia",
  )

go_repository(
  name = "com_github_manifoldco_promptui",
  commit = "3dd80c00b7cb0bc779d1c204da6f3ae0fa6a4eee",
  importpath = "github.com/manifoldco/promptui",
)

go_repository(
  name = "com_github_pelletier_go_toml",
  importpath = "github.com/pelletier/go-toml",
  tag = "v1.2.0",
)
