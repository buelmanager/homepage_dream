#!/usr/bin/env bash
HOME_DIR="/Users/chulheewon/development/main_project/homepage_dream/multi_clone_hompage/home"
ls "$HOME_DIR" | grep -v '^<slug>' | sort
