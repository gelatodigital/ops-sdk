/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface OpsInterface extends utils.Interface {
  functions: {
    "cancelTask(bytes32)": FunctionFragment;
    "createTask(address,bytes4,address,bytes)": FunctionFragment;
    "createTaskNoPrepayment(address,bytes4,address,bytes,address)": FunctionFragment;
    "createTimedTask(uint128,uint128,address,bytes4,address,bytes,address,bool)": FunctionFragment;
    "exec(uint256,address,address,bool,bytes32,address,bytes)": FunctionFragment;
    "execAddresses(bytes32)": FunctionFragment;
    "fee()": FunctionFragment;
    "feeToken()": FunctionFragment;
    "gelato()": FunctionFragment;
    "getFeeDetails()": FunctionFragment;
    "getResolverHash(address,bytes)": FunctionFragment;
    "getSelector(string)": FunctionFragment;
    "getTaskId(address,address,bytes4,bool,address,bytes32)": FunctionFragment;
    "getTaskIdsByUser(address)": FunctionFragment;
    "taskCreator(bytes32)": FunctionFragment;
    "taskTreasury()": FunctionFragment;
    "timedTask(bytes32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelTask"
      | "createTask"
      | "createTaskNoPrepayment"
      | "createTimedTask"
      | "exec"
      | "execAddresses"
      | "fee"
      | "feeToken"
      | "gelato"
      | "getFeeDetails"
      | "getResolverHash"
      | "getSelector"
      | "getTaskId"
      | "getTaskIdsByUser"
      | "taskCreator"
      | "taskTreasury"
      | "timedTask"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelTask",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createTask",
    values: [string, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createTaskNoPrepayment",
    values: [string, BytesLike, string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createTimedTask",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      string,
      BytesLike,
      string,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [
      BigNumberish,
      string,
      string,
      boolean,
      BytesLike,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execAddresses",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFeeDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getResolverHash",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getSelector", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTaskId",
    values: [string, string, BytesLike, boolean, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTaskIdsByUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "taskCreator",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "taskTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timedTask",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancelTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createTaskNoPrepayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTimedTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResolverHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTaskId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTaskIdsByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timedTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "ExecSuccess(uint256,address,address,bytes,bytes32)": EventFragment;
    "TaskCancelled(bytes32,address)": EventFragment;
    "TaskCreated(address,address,bytes4,address,bytes32,bytes,bool,address,bytes32)": EventFragment;
    "TimerSet(bytes32,uint128,uint128)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TaskCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TaskCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TimerSet"): EventFragment;
}

export interface ExecSuccessEventObject {
  txFee: BigNumber;
  feeToken: string;
  execAddress: string;
  execData: string;
  taskId: string;
}
export type ExecSuccessEvent = TypedEvent<
  [BigNumber, string, string, string, string],
  ExecSuccessEventObject
>;

export type ExecSuccessEventFilter = TypedEventFilter<ExecSuccessEvent>;

export interface TaskCancelledEventObject {
  taskId: string;
  taskCreator: string;
}
export type TaskCancelledEvent = TypedEvent<
  [string, string],
  TaskCancelledEventObject
>;

export type TaskCancelledEventFilter = TypedEventFilter<TaskCancelledEvent>;

export interface TaskCreatedEventObject {
  taskCreator: string;
  execAddress: string;
  selector: string;
  resolverAddress: string;
  taskId: string;
  resolverData: string;
  useTaskTreasuryFunds: boolean;
  feeToken: string;
  resolverHash: string;
}
export type TaskCreatedEvent = TypedEvent<
  [string, string, string, string, string, string, boolean, string, string],
  TaskCreatedEventObject
>;

export type TaskCreatedEventFilter = TypedEventFilter<TaskCreatedEvent>;

export interface TimerSetEventObject {
  taskId: string;
  nextExec: BigNumber;
  interval: BigNumber;
}
export type TimerSetEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  TimerSetEventObject
>;

export type TimerSetEventFilter = TypedEventFilter<TimerSetEvent>;

export interface Ops extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OpsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelTask(
      _taskId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTaskNoPrepayment(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTimedTask(
      _startTime: BigNumberish,
      _interval: BigNumberish,
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      _useTreasury: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execAddresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeToken(overrides?: CallOverrides): Promise<[string]>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    getFeeDetails(overrides?: CallOverrides): Promise<[BigNumber, string]>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSelector(_func: string, overrides?: CallOverrides): Promise<[string]>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _feeToken: string,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    taskTreasury(overrides?: CallOverrides): Promise<[string]>;

    timedTask(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nextExec: BigNumber; interval: BigNumber }
    >;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  cancelTask(
    _taskId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTask(
    _execAddress: string,
    _execSelector: BytesLike,
    _resolverAddress: string,
    _resolverData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTaskNoPrepayment(
    _execAddress: string,
    _execSelector: BytesLike,
    _resolverAddress: string,
    _resolverData: BytesLike,
    _feeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTimedTask(
    _startTime: BigNumberish,
    _interval: BigNumberish,
    _execAddress: string,
    _execSelector: BytesLike,
    _resolverAddress: string,
    _resolverData: BytesLike,
    _feeToken: string,
    _useTreasury: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exec(
    _txFee: BigNumberish,
    _feeToken: string,
    _taskCreator: string,
    _useTaskTreasuryFunds: boolean,
    _resolverHash: BytesLike,
    _execAddress: string,
    _execData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execAddresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  feeToken(overrides?: CallOverrides): Promise<string>;

  gelato(overrides?: CallOverrides): Promise<string>;

  getFeeDetails(overrides?: CallOverrides): Promise<[BigNumber, string]>;

  getResolverHash(
    _resolverAddress: string,
    _resolverData: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getSelector(_func: string, overrides?: CallOverrides): Promise<string>;

  getTaskId(
    _taskCreator: string,
    _execAddress: string,
    _selector: BytesLike,
    _useTaskTreasuryFunds: boolean,
    _feeToken: string,
    _resolverHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getTaskIdsByUser(
    _taskCreator: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  taskTreasury(overrides?: CallOverrides): Promise<string>;

  timedTask(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { nextExec: BigNumber; interval: BigNumber }
  >;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancelTask(_taskId: BytesLike, overrides?: CallOverrides): Promise<void>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    createTaskNoPrepayment(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createTimedTask(
      _startTime: BigNumberish,
      _interval: BigNumberish,
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      _useTreasury: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    execAddresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeToken(overrides?: CallOverrides): Promise<string>;

    gelato(overrides?: CallOverrides): Promise<string>;

    getFeeDetails(overrides?: CallOverrides): Promise<[BigNumber, string]>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getSelector(_func: string, overrides?: CallOverrides): Promise<string>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _feeToken: string,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    taskTreasury(overrides?: CallOverrides): Promise<string>;

    timedTask(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nextExec: BigNumber; interval: BigNumber }
    >;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ExecSuccess(uint256,address,address,bytes,bytes32)"(
      txFee?: BigNumberish | null,
      feeToken?: string | null,
      execAddress?: string | null,
      execData?: null,
      taskId?: null
    ): ExecSuccessEventFilter;
    ExecSuccess(
      txFee?: BigNumberish | null,
      feeToken?: string | null,
      execAddress?: string | null,
      execData?: null,
      taskId?: null
    ): ExecSuccessEventFilter;

    "TaskCancelled(bytes32,address)"(
      taskId?: null,
      taskCreator?: null
    ): TaskCancelledEventFilter;
    TaskCancelled(taskId?: null, taskCreator?: null): TaskCancelledEventFilter;

    "TaskCreated(address,address,bytes4,address,bytes32,bytes,bool,address,bytes32)"(
      taskCreator?: null,
      execAddress?: null,
      selector?: null,
      resolverAddress?: null,
      taskId?: null,
      resolverData?: null,
      useTaskTreasuryFunds?: null,
      feeToken?: null,
      resolverHash?: null
    ): TaskCreatedEventFilter;
    TaskCreated(
      taskCreator?: null,
      execAddress?: null,
      selector?: null,
      resolverAddress?: null,
      taskId?: null,
      resolverData?: null,
      useTaskTreasuryFunds?: null,
      feeToken?: null,
      resolverHash?: null
    ): TaskCreatedEventFilter;

    "TimerSet(bytes32,uint128,uint128)"(
      taskId?: BytesLike | null,
      nextExec?: BigNumberish | null,
      interval?: BigNumberish | null
    ): TimerSetEventFilter;
    TimerSet(
      taskId?: BytesLike | null,
      nextExec?: BigNumberish | null,
      interval?: BigNumberish | null
    ): TimerSetEventFilter;
  };

  estimateGas: {
    cancelTask(
      _taskId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTaskNoPrepayment(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTimedTask(
      _startTime: BigNumberish,
      _interval: BigNumberish,
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      _useTreasury: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execAddresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeToken(overrides?: CallOverrides): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeDetails(overrides?: CallOverrides): Promise<BigNumber>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSelector(_func: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _feeToken: string,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taskCreator(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    taskTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    timedTask(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelTask(
      _taskId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTask(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTaskNoPrepayment(
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTimedTask(
      _startTime: BigNumberish,
      _interval: BigNumberish,
      _execAddress: string,
      _execSelector: BytesLike,
      _resolverAddress: string,
      _resolverData: BytesLike,
      _feeToken: string,
      _useTreasury: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exec(
      _txFee: BigNumberish,
      _feeToken: string,
      _taskCreator: string,
      _useTaskTreasuryFunds: boolean,
      _resolverHash: BytesLike,
      _execAddress: string,
      _execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execAddresses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeeDetails(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getResolverHash(
      _resolverAddress: string,
      _resolverData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSelector(
      _func: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTaskId(
      _taskCreator: string,
      _execAddress: string,
      _selector: BytesLike,
      _useTaskTreasuryFunds: boolean,
      _feeToken: string,
      _resolverHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTaskIdsByUser(
      _taskCreator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskCreator(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timedTask(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
