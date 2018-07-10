workspace(name = "mono")


### Go Rules
git_repository(
  name = "io_bazel_rules_go",
  commit = "6bee898391a42971289a7989c0f459ab5a4a84dd",  # master as of May 10th, 2018
  remote = "https://github.com/bazelbuild/rules_go.git",
  )

http_archive(
  name = "bazel_gazelle",
  sha256 = "ddedc7aaeb61f2654d7d7d4fd7940052ea992ccdb031b8f9797ed143ac7e8d43",
  url = "https://github.com/bazelbuild/bazel-gazelle/releases/download/0.12.0/bazel-gazelle-0.12.0.tar.gz",
  )

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_register_toolchains()

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")

gazelle_dependencies()


http_archive(
  name = "io_bazel_rules_webtesting",
  strip_prefix = "rules_webtesting-master",
  urls = [
    "https://github.com/bazelbuild/rules_webtesting/archive/master.tar.gz",
    ],
)
load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")
web_test_repositories()
browser_repositories(
  chromium = True,
)

go_rules_dependencies()

## Protos
new_http_archive(
  name = "com_github_googleapis_googleapis",
  build_file_content = """
  package(default_visibility = ["//visibility:public"])
  proto_library(
    name = "annotations_proto",
    srcs = [
      "google/api/http.proto",
      "google/api/annotations.proto",
      ],
    visibility = ["//visibility:public"],
    deps = [
      "@com_google_protobuf//:descriptor_proto",
      ],
    )
  """,
  strip_prefix = "googleapis-d084748b9243368c1a8cc12f4d3a0c84e8407e46/",
  urls = ["https://github.com/googleapis/googleapis/archive/d084748b9243368c1a8cc12f4d3a0c84e8407e46.zip"],
)


### Node
git_repository(
  name = "build_bazel_rules_nodejs",
  remote = "https://github.com/bazelbuild/rules_nodejs.git",
  tag = "0.9.1",
)
load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")
node_repositories(package_json = ["//projects/blog:package.json"])
node_repositories(package_json = ["//projects/xml-to-sheets:package.json"])
node_repositories(package_json = ["//projects/grpc-web/frontend:package.json"])

yarn_install(
  name = "deps",
  package_json = "//projects/grpc-web/frontend:package.json",
  yarn_lock = "//projects/grpc-web/frontend:yarn.lock",
)
yarn_install(
  name = "blog",
  package_json = "//projects/blog:package.json",
  yarn_lock = "//projects/blog:yarn.lock",
)
yarn_install(
  name = "xml",
  package_json = "//projects/xml-to-sheets:package.json",
  yarn_lock = "//projects/xml-to-sheets:yarn.lock",
)

git_repository(
  name = "ts_protoc_gen",
  remote = "https://github.com/improbable-eng/ts-protoc-gen",
  commit = "53aa49ccb3fa7832934ff1cbf86ec62df1cde4cd",
)

load("@ts_protoc_gen//:defs.bzl", "typescript_proto_dependencies")
typescript_proto_dependencies()


### Typescript
git_repository(
  name = "build_bazel_rules_typescript",
  remote = "https://github.com/bazelbuild/rules_typescript.git",
  tag = "0.14.0",
)
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()


# local_repository(
#   name = "rxjs",
#   path = "projects/grpc-web/frontend/node_modules/listr/node_modules/rxjs/src",
#   )
# local_repository(
#   name = "rxjs_2",
#   path = "projects/grpc-web/frontend/node_modules/rxjs/src",
# )
# local_repository(
#   name = "ts_protoc_gen_exclude",
#   path = "projects/grpc-web/frontend/node_modules/ts-protoc-gen/bin",
# )

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
