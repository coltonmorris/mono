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

yarn_install(
  name = "deps",
  package_json = "//projects/blog:package.json",
  yarn_lock = "//projects/blog:yarn.lock",
)

### Typescript
git_repository(
  name = "build_bazel_rules_typescript",
  remote = "https://github.com/bazelbuild/rules_typescript.git",
  tag = "0.14.0",
)
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()
