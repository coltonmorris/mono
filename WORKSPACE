workspace(
  name = "mono",
  managed_directories = {"@npm": ["node_modules"]},
)
       
# These rules are built-into Bazel but we need to load them first to download more rules
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

#########
# TS/JS #
#########
       
# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
  name = "build_bazel_rules_nodejs",
  sha256 = "121f17d8b421ce72f3376431c3461cd66bfe14de49059edc7bb008d5aebd16be",
  urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.3.1/rules_nodejs-2.3.1.tar.gz"],
)

http_archive(
  name = "com_google_protobuf",
  sha256 = "d0f5f605d0d656007ce6c8b5a82df3037e1d8fe8b121ed42e536f569dec16113",
  strip_prefix = "protobuf-3.14.0",
  urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.14.0.tar.gz"],
)

http_archive(
  name = "rules_proto",
  sha256 = "4d421d51f9ecfe9bf96ab23b55c6f2b809cbaf0eea24952683e397decfbd0dd0",
  strip_prefix = "rules_proto-f6b8d89b90a7956f6782a4a3609b2f0eee3ce965",
  urls = [
    "https://github.com/bazelbuild/rules_proto/archive/f6b8d89b90a7956f6782a4a3609b2f0eee3ce965.tar.gz",
  ],
)
       
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

# Setup the Node.js toolchain & install our npm dependencies into @npm
yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

load("@npm//@bazel/labs:package.bzl", "npm_bazel_labs_dependencies")

npm_bazel_labs_dependencies()
       
load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()

       
######
# GO #
######

http_archive(
  name = "io_bazel_rules_go",
  sha256 = "207fad3e6689135c5d8713e5a17ba9d1290238f47b9ba545b63d9303406209c6",
  urls = [
    "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.24.7/rules_go-v0.24.7.tar.gz",
    "https://github.com/bazelbuild/rules_go/releases/download/v0.24.7/rules_go-v0.24.7.tar.gz",
    ],
)
       
http_archive(
  name = "bazel_gazelle",
  sha256 = "b85f48fa105c4403326e9525ad2b2cc437babaa6e15a3fc0b1dbab0ab064bc7c",
  urls = [
    "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.22.2/bazel-gazelle-v0.22.2.tar.gz",
    "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.22.2/bazel-gazelle-v0.22.2.tar.gz",
  ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")
       
go_rules_dependencies()

go_register_toolchains()
       
gazelle_dependencies()
       
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
       
go_repository(
  name = "org_golang_x_net",
  importpath = "golang.org/x/net",
  sum = "h1:pNX+40auqi2JqRfOP1akLGtYcn15TUbkhwuCO3foqqM=",
  version = "v0.0.0-20200602114024-627f9648deb9",
)

go_repository(
  name = "org_golang_google_grpc",
  importpath = "google.golang.org/grpc",
  sum = "h1:EC2SB8S04d2r73uptxphDSUG+kTKVgjRPF+N3xpxRB4=",
  version = "v1.29.1",
)

go_repository(
  name = "org_golang_x_text",
  importpath = "golang.org/x/text",
  sum = "h1:tW2bmiBqwgJj/UpqtC8EpXEZVYOwU0yG4iWbprSVAcs=",
  version = "v0.3.2",
)
