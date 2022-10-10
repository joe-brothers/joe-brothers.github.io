#!/bin/bash

if [[ $BRANCH == "main" ]]
then
  exit 0
else
  exit 1
fi