// source: google/type/datetime.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.google.type.DateTime');
goog.provide('proto.google.type.DateTime.TimeOffsetCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Duration');
goog.require('proto.google.type.TimeZone');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.type.DateTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.type.DateTime.oneofGroups_);
};
goog.inherits(proto.google.type.DateTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.type.DateTime.displayName = 'proto.google.type.DateTime';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.type.DateTime.oneofGroups_ = [[8,9]];

/**
 * @enum {number}
 */
proto.google.type.DateTime.TimeOffsetCase = {
  TIME_OFFSET_NOT_SET: 0,
  UTC_OFFSET: 8,
  TIME_ZONE: 9
};

/**
 * @return {proto.google.type.DateTime.TimeOffsetCase}
 */
proto.google.type.DateTime.prototype.getTimeOffsetCase = function() {
  return /** @type {proto.google.type.DateTime.TimeOffsetCase} */(jspb.Message.computeOneofCase(this, proto.google.type.DateTime.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.type.DateTime.prototype.toObject = function(opt_includeInstance) {
  return proto.google.type.DateTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.type.DateTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.DateTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    day: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hours: jspb.Message.getFieldWithDefault(msg, 4, 0),
    minutes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    seconds: jspb.Message.getFieldWithDefault(msg, 6, 0),
    nanos: jspb.Message.getFieldWithDefault(msg, 7, 0),
    utcOffset: (f = msg.getUtcOffset()) && proto.google.protobuf.Duration.toObject(includeInstance, f),
    timeZone: (f = msg.getTimeZone()) && proto.google.type.TimeZone.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.type.DateTime}
 */
proto.google.type.DateTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.type.DateTime;
  return proto.google.type.DateTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.type.DateTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.type.DateTime}
 */
proto.google.type.DateTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHours(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinutes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeconds(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    case 8:
      var value = new proto.google.protobuf.Duration;
      reader.readMessage(value,proto.google.protobuf.Duration.deserializeBinaryFromReader);
      msg.setUtcOffset(value);
      break;
    case 9:
      var value = new proto.google.type.TimeZone;
      reader.readMessage(value,proto.google.type.TimeZone.deserializeBinaryFromReader);
      msg.setTimeZone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.type.DateTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.type.DateTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.type.DateTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.DateTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDay();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHours();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMinutes();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getUtcOffset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeZone();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.type.TimeZone.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 day = 3;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 hours = 4;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setHours = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 minutes = 5;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 seconds = 6;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 nanos = 7;
 * @return {number}
 */
proto.google.type.DateTime.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.setNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Duration utc_offset = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.type.DateTime.prototype.getUtcOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.type.DateTime} returns this
*/
proto.google.type.DateTime.prototype.setUtcOffset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.google.type.DateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.clearUtcOffset = function() {
  return this.setUtcOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.type.DateTime.prototype.hasUtcOffset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TimeZone time_zone = 9;
 * @return {?proto.google.type.TimeZone}
 */
proto.google.type.DateTime.prototype.getTimeZone = function() {
  return /** @type{?proto.google.type.TimeZone} */ (
    jspb.Message.getWrapperField(this, proto.google.type.TimeZone, 9));
};


/**
 * @param {?proto.google.type.TimeZone|undefined} value
 * @return {!proto.google.type.DateTime} returns this
*/
proto.google.type.DateTime.prototype.setTimeZone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.google.type.DateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.type.DateTime} returns this
 */
proto.google.type.DateTime.prototype.clearTimeZone = function() {
  return this.setTimeZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.type.DateTime.prototype.hasTimeZone = function() {
  return jspb.Message.getField(this, 9) != null;
};


