gacp:
	@echo off
	git add .
	echo ""
	git commit -m "$m"
	echo ""
	git push -u origin $b