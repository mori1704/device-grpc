/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "pbs";

export interface PingRequest {
  ping: string;
}

export interface PingResponse {
  pong: string;
}

export interface StartDeviceRequest {
  channelId: string;
  jid: string;
}

export interface StartDeviceResponse {
  result: string;
}

function createBasePingRequest(): PingRequest {
  return { ping: "" };
}

export const PingRequest = {
  encode(message: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ping !== "") {
      writer.uint32(10).string(message.ping);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ping = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingRequest {
    return { ping: isSet(object.ping) ? String(object.ping) : "" };
  },

  toJSON(message: PingRequest): unknown {
    const obj: any = {};
    message.ping !== undefined && (obj.ping = message.ping);
    return obj;
  },

  create<I extends Exact<DeepPartial<PingRequest>, I>>(base?: I): PingRequest {
    return PingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingRequest>, I>>(object: I): PingRequest {
    const message = createBasePingRequest();
    message.ping = object.ping ?? "";
    return message;
  },
};

function createBasePingResponse(): PingResponse {
  return { pong: "" };
}

export const PingResponse = {
  encode(message: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pong !== "") {
      writer.uint32(10).string(message.pong);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pong = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingResponse {
    return { pong: isSet(object.pong) ? String(object.pong) : "" };
  },

  toJSON(message: PingResponse): unknown {
    const obj: any = {};
    message.pong !== undefined && (obj.pong = message.pong);
    return obj;
  },

  create<I extends Exact<DeepPartial<PingResponse>, I>>(base?: I): PingResponse {
    return PingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PingResponse>, I>>(object: I): PingResponse {
    const message = createBasePingResponse();
    message.pong = object.pong ?? "";
    return message;
  },
};

function createBaseStartDeviceRequest(): StartDeviceRequest {
  return { channelId: "", jid: "" };
}

export const StartDeviceRequest = {
  encode(message: StartDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.jid !== "") {
      writer.uint32(18).string(message.jid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartDeviceRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      jid: isSet(object.jid) ? String(object.jid) : "",
    };
  },

  toJSON(message: StartDeviceRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.jid !== undefined && (obj.jid = message.jid);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartDeviceRequest>, I>>(base?: I): StartDeviceRequest {
    return StartDeviceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartDeviceRequest>, I>>(object: I): StartDeviceRequest {
    const message = createBaseStartDeviceRequest();
    message.channelId = object.channelId ?? "";
    message.jid = object.jid ?? "";
    return message;
  },
};

function createBaseStartDeviceResponse(): StartDeviceResponse {
  return { result: "" };
}

export const StartDeviceResponse = {
  encode(message: StartDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartDeviceResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: StartDeviceResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartDeviceResponse>, I>>(base?: I): StartDeviceResponse {
    return StartDeviceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartDeviceResponse>, I>>(object: I): StartDeviceResponse {
    const message = createBaseStartDeviceResponse();
    message.result = object.result ?? "";
    return message;
  },
};

export type DeviceService = typeof DeviceService;
export const DeviceService = {
  startDevice: {
    path: "/pbs.Device/StartDevice",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartDeviceRequest) => Buffer.from(StartDeviceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartDeviceRequest.decode(value),
    responseSerialize: (value: StartDeviceResponse) => Buffer.from(StartDeviceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StartDeviceResponse.decode(value),
  },
  ping: {
    path: "/pbs.Device/Ping",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PingRequest) => Buffer.from(PingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PingRequest.decode(value),
    responseSerialize: (value: PingResponse) => Buffer.from(PingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PingResponse.decode(value),
  },
} as const;

export interface DeviceServer extends UntypedServiceImplementation {
  startDevice: handleUnaryCall<StartDeviceRequest, StartDeviceResponse>;
  ping: handleUnaryCall<PingRequest, PingResponse>;
}

export interface DeviceClient extends Client {
  startDevice(
    request: StartDeviceRequest,
    callback: (error: ServiceError | null, response: StartDeviceResponse) => void,
  ): ClientUnaryCall;
  startDevice(
    request: StartDeviceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StartDeviceResponse) => void,
  ): ClientUnaryCall;
  startDevice(
    request: StartDeviceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StartDeviceResponse) => void,
  ): ClientUnaryCall;
  ping(request: PingRequest, callback: (error: ServiceError | null, response: PingResponse) => void): ClientUnaryCall;
  ping(
    request: PingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PingResponse) => void,
  ): ClientUnaryCall;
  ping(
    request: PingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PingResponse) => void,
  ): ClientUnaryCall;
}

export const DeviceClient = makeGenericClientConstructor(DeviceService, "pbs.Device") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DeviceClient;
  service: typeof DeviceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
