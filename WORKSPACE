workspace(
  name = "mono",
  managed_directories = {"@npm": ["node_modules"]},
)
       
# These rules are built-into Bazel but we need to load them first to download more rules
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

       
# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
  name = "build_bazel_rules_nodejs",
  sha256 = "0f2de53628e848c1691e5729b515022f5a77369c76a09fbe55611e12731c90e3",
  urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.0.1/rules_nodejs-2.0.1.tar.gz"],
)

# Check the bazel version and download npm dependencies
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
       
# Setup the Node.js toolchain & install our npm dependencies into @npm
yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)
