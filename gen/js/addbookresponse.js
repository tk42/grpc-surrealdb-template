// source: book/v1/book.proto
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

goog.provide('proto.book.v1.AddBookResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.book.v1.Book');

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
proto.book.v1.AddBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.book.v1.AddBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.book.v1.AddBookResponse.displayName = 'proto.book.v1.AddBookResponse';
}



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
proto.book.v1.AddBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.book.v1.AddBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.book.v1.AddBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.book.v1.AddBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    book: (f = msg.getBook()) && proto.book.v1.Book.toObject(includeInstance, f)
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
 * @return {!proto.book.v1.AddBookResponse}
 */
proto.book.v1.AddBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.book.v1.AddBookResponse;
  return proto.book.v1.AddBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.book.v1.AddBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.book.v1.AddBookResponse}
 */
proto.book.v1.AddBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.book.v1.Book;
      reader.readMessage(value,proto.book.v1.Book.deserializeBinaryFromReader);
      msg.setBook(value);
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
proto.book.v1.AddBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.book.v1.AddBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.book.v1.AddBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.book.v1.AddBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBook();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.book.v1.Book.serializeBinaryToWriter
    );
  }
};


/**
 * optional Book book = 1;
 * @return {?proto.book.v1.Book}
 */
proto.book.v1.AddBookResponse.prototype.getBook = function() {
  return /** @type{?proto.book.v1.Book} */ (
    jspb.Message.getWrapperField(this, proto.book.v1.Book, 1));
};


/**
 * @param {?proto.book.v1.Book|undefined} value
 * @return {!proto.book.v1.AddBookResponse} returns this
*/
proto.book.v1.AddBookResponse.prototype.setBook = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.book.v1.AddBookResponse} returns this
 */
proto.book.v1.AddBookResponse.prototype.clearBook = function() {
  return this.setBook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.book.v1.AddBookResponse.prototype.hasBook = function() {
  return jspb.Message.getField(this, 1) != null;
};


