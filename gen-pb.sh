# # generate protobuf files ts

# #/bin/bash

# PBS_PATH=./src/proto

# # generate protobuf files
# protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=service=true:${PBS_PATH} \
#     --js_out=import_style=commonjs,binary:${PBS_PATH} \
#     --proto_path=${PBS_PATH} \
#     ${PBS_PATH}/device.proto

#!/bin/bash
protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=dist \
 --ts_proto_opt=outputServices=grpc-js \
 --ts_proto_opt=esModuleInterop=true \
 -I=src/ src/**/*.proto