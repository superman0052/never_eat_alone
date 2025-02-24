#!/bin/bash
source="${BASH_SOURCE[0]}"
while [ -h "$source" ]; do
  dir="$(cd -P "$(dirname "$source")" >/dev/null 2>&1 && pwd -P)"
  source="$(readlink "$source")"
  [[ $source != /* ]] && source="$dir/$source"
done
directory="$(cd -P "$(dirname "$source")" >/dev/null 2>&1 && pwd -P)"
root=$(pwd -P)
if [ ! -f "build.sh" ]; then
  ln -s "$directory/build.sh" build.sh
fi
if [ ! -f "configure.sh" ]; then
  ln -s "$directory/configure.sh" configure.sh
fi

build_function() {
  location="${@: -1}"
  if [ ! -d "$location" ]; then
    mkdir -p "$location"
  fi
  pushd "$location"
  "$directory/$location/build.sh" -DD="$root/../library/Dependencies" "${@:1:$#-1}" 2>&1
  popd
}

export -f build_function
export directory
export root

targets+=" demo"
targets+=" scratch"
targets+=" ui_catalog"

if [ "$(uname -s)" = "Darwin" ]; then
  cores=`sysctl -n machdep.cpu.thread_count`
else
  cores=`grep -c "processor" < /proc/cpuinfo`
fi
jobs="$(($cores))"
parallel -j$jobs --no-notice build_function "$@" ::: $targets
