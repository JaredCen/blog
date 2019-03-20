#!/bin/bash

while getopts :s:d:m: opt
do
  case "$opt" in
    s) SRC_DIR=$OPTARG ;;       # 源目录
    d) SVN_DIR=$OPTARG ;;       # svn目录
    m) COMMIT_INFO=$OPTARG ;;   # commit info
    *) 
      echo "ERROR: unknown option" 
      exit 0 ;;
  esac
done

# 设置-s，-d参数必填
if [ -z $SRC_DIR ] || [ -z $SVN_DIR ]
  then
  echo "ERROR: options -s, -d is null";
  exit 0;
fi

cd $SVN_DIR
svn update
svn delete *
cp -rf $SRC_DIR/* $SVN_DIR
svn add *
svn commit -m "$COMMIT_INFO"

# cd $SVN_DIR
# svn update
# rm -rf *
# cp -rf $SRC_DIR/* $SVN_DIR
# svn add `svn st | grep "^?"| awk '{print $2}'`
# svn delete `svn st | grep "^!" | awk '{print $2}'`
# svn commit -m $COMMIT_INFO