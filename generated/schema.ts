// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositedAmt(): BigInt {
    let value = this.get("depositedAmt");
    return value.toBigInt();
  }

  set depositedAmt(value: BigInt) {
    this.set("depositedAmt", Value.fromBigInt(value));
  }

  get asset(): Bytes {
    let value = this.get("asset");
    return value.toBytes();
  }

  set asset(value: Bytes) {
    this.set("asset", Value.fromBytes(value));
  }

  get sharesReceived(): BigInt {
    let value = this.get("sharesReceived");
    return value.toBigInt();
  }

  set sharesReceived(value: BigInt) {
    this.set("sharesReceived", Value.fromBigInt(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }
}

export class Withdrawal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdrawal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdrawal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdrawal", id.toString(), this);
  }

  static load(id: string): Withdrawal | null {
    return store.get("Withdrawal", id) as Withdrawal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountWithdrawn(): BigInt {
    let value = this.get("amountWithdrawn");
    return value.toBigInt();
  }

  set amountWithdrawn(value: BigInt) {
    this.set("amountWithdrawn", Value.fromBigInt(value));
  }

  get asset(): Bytes {
    let value = this.get("asset");
    return value.toBytes();
  }

  set asset(value: Bytes) {
    this.set("asset", Value.fromBytes(value));
  }

  get sharesWithdrawn(): BigInt {
    let value = this.get("sharesWithdrawn");
    return value.toBigInt();
  }

  set sharesWithdrawn(value: BigInt) {
    this.set("sharesWithdrawn", Value.fromBigInt(value));
  }

  get withdrawer(): Bytes {
    let value = this.get("withdrawer");
    return value.toBytes();
  }

  set withdrawer(value: Bytes) {
    this.set("withdrawer", Value.fromBytes(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get feeTo(): Bytes {
    let value = this.get("feeTo");
    return value.toBytes();
  }

  set feeTo(value: Bytes) {
    this.set("feeTo", Value.fromBytes(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Approval entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Approval entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Approval", id.toString(), this);
  }

  static load(id: string): Approval | null {
    return store.get("Approval", id) as Approval | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class LogInit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogInit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogInit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogInit", id.toString(), this);
  }

  static load(id: string): LogInit | null {
    return store.get("LogInit", id) as LogInit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timeOfInit(): BigInt {
    let value = this.get("timeOfInit");
    return value.toBigInt();
  }

  set timeOfInit(value: BigInt) {
    this.set("timeOfInit", Value.fromBigInt(value));
  }
}
