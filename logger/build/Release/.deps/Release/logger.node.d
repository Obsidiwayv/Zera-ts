cmd_Release/logger.node := ln -f "Release/obj.target/logger.node" "Release/logger.node" 2>/dev/null || (rm -rf "Release/logger.node" && cp -af "Release/obj.target/logger.node" "Release/logger.node")
