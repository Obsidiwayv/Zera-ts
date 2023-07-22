{
	"targets": [
		{
			"target_name": "logger",
			"sources": [ "./logs.cpp" ],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
				"<!(node -e \"require('fs')\")"
			]
		}
	]
}