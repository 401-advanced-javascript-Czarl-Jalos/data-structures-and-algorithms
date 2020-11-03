'use strict';

const StacksorQueue = require('./stacks-and-queues.js');
const Stack = StacksorQueue.Stack;
const Queue = StacksorQueue.Queue;

describe('Stack class', () => {

  it('should push onto a stack', () => {
    const stack = new Stack();
    stack.push('kombucha')
    expect( stack.peek()).toEqual('kombucha');
  });


  it('should push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    stack.push('jun');
    expect(stack.peek()).toBe('jun');
  });


  it('should pop off the stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    expect(stack.pop()).toBe('kimchi');
  });


  it('should empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });


  it('should peek the top item in the stack', () => {
    const stack = new Stack();
    stack.push('kombucha');
    stack.push('kimchi');
    expect(stack.peek()).toBe('kimchi');
  });


  it('can instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });


  // it('will raise exception when pop() is called on empty stack', () => {
  //   const stack = new Stack();
  //   expect(() => stack.pop()).toThrow(console.error());
  // });

});

// ------------------- QUEUE TESTS --------------------------

describe('Queue class', () => {


  it('should enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('9');
    expect(queue.peek()).toBe('9');
  });


  it('should enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    queue.enqueue('carrots');
    expect(queue.peek()).toEqual('beans');
  });




  it('can peek into a queue, seeing the expected values', () => {
    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    expect(queue.peek()).toBe('beans');
  });


  it('can empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('beans');
    queue.enqueue('asparagus');
    queue.enqueue('carrots');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });


  it('can instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });


  it('raises an exception when calling dequeue() on an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow(console.error());
  });


});