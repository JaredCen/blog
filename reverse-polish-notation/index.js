function Calculate(options = {}) {
  // 运算符权重
  this.weight = options.weight || {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };
  // 小数位精度
  this.precision = options.precision || 2;
  this.operatorStack = [];    // 运算符栈
  this.outputQueue = [];      // 逆波兰表达式队列
}

Calculate.prototype = {

  /**
   * @desc 四则运算，浮点数处理
   */
  operate(left, right, operator) {
    const factor = +'1000000000000'.slice(0, this.precision + 1);
    if (operator === '+') {
      return Math.round(left * factor + right * factor) / factor;
    } else if (operator === '-') {
      return Math.round(left * factor - right * factor) / factor;
    } else if (operator === '*') {
      return Math.round(left * right * factor) / factor;
    } else if (operator === '/') {
      return Math.round(left / right * factor) / factor;
    }
  },

  /**
   * @desc 调度场算法
   */
  shuntingYard(token) {
    if (!isNaN(+token)) {
      this.outputQueue.push(+token);
    } else if (token === '(') {
      this.operatorStack.push(token);
    } else if (token === ')') {
      let top = this.operatorStack.pop();
      while (top && top !== '(') {
        this.outputQueue.push(top);
        top = this.operatorStack.pop();
      }
      if (!top) throw new Error('表达式格式错误：括号不闭合');
    } else {
      let top = this.operatorStack.pop();
      while (top && top !== '(' && this.weight[token] <= this.weight[top]) {
        this.outputQueue.push(top);
        top = this.operatorStack.pop();
      }
      top ? this.operatorStack.push(top, token) : this.operatorStack.push(token);
    }
  },

  /**
   * @desc 计算逆波兰表达式
   */
  calRpn() {
    const stack = [];
    while (this.outputQueue.length) {
      let token = this.outputQueue.shift();
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        const right = stack.pop();
        const left = stack.pop();
        if (!right || !left) throw new Error('计算错误');
        stack.push(this.operate(left, right, token));
      }
    }
    if (stack.length !== 1) throw new Error('计算错误');
    return stack[0];
  },

  /**
   * @desc 校验表达式合法性，预处理等
   * @todo 更详细的格式校验
   */
  preValid(expStr) {
    return expStr;
  },

  run(expStr) {
    this.operatorStack = [];
    this.outputQueue = [];

    let chars;
    const str = this.preValid(expStr);
    const reg = /(((?<!\d)-)?\d+(\.\d+)?|[\(\)\+\-\*\/])/g;
    while ((chars = reg.exec(str)) !== null) {
      this.shuntingYard(chars[0]);
    }
    while (this.operatorStack.length) {
      this.outputQueue.push(this.operatorStack.pop());
    }
    console.log(this.outputQueue);
    return this.calRpn()
  }
}

const cal = new Calculate();
cal.run('1-(-2.333+3*-8)');