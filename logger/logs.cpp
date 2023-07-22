#include <nan.h>

void CreateLog(const Nan::FunctionCallbackInfo<v8::Value>& content) {
  printf("%s", content);
}

void Init(v8::Local<v8::Object> exports) {
	  v8::Local<v8::Context> context =
      exports->GetCreationContext().ToLocalChecked();
  exports->Set(context,
               Nan::New("createlog").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(CreateLog)
                   ->GetFunction(context)
                   .ToLocalChecked());
}

NODE_MODULE(logs, Init)