'use strict'

const EventEmitter = require('events')

class myWidget extends EventEmitter {
  constructor ({blessed = {}, contrib = {}, screen = {}}) {
    super()
    this.blessed = blessed
    this.contrib = contrib
    this.screen = screen

    this.widget = this.createWidget()
  }

  setWidgetsRepo (widgets = new Map()) {
    this.widgetsRepo = widgets
  }

  setUtilsRepo (utils = new Map()) {
    this.utilsRepo = utils
  }

  init () {
    return null
  }

  getWidget () {
    return this.widget
  }

  createWidget () {
    let widget = this.blessed.listbar({
      keys: false,
      vi: true,
      mouse: true,
      style: {
        bg: 'green'
      },
      height: 'shrink',
      bottom: '0',
      left: '0',
      right: '0',
      autoCommandKeys: false,
      commands: {
        'refresh': {
          keys: ['='],
          callback: () => { this.emit('key', '=') }
        },
        'info': {
          keys: ['i'],
          callback: () => { this.emit('key', 'i') }
        },
        // 'host info': {
        //   keys: ['0'],
        //   callback: () => { this.emit('key', '0') }
        // },
        'shell': {
          keys: ['l'],
          callback: () => { this.emit('key', 'l') }
        },
        'logs': {
          keys: ['[RETURN]'],
          callback: () => { this.emit('key', '[RETURN]') }
        },
        'restart': {
          keys: ['r'],
          callback: () => { this.emit('key', 'r') }
        },
        'stop': {
          keys: ['s'],
          callback: () => { this.emit('key', 's') }
        },
        'quit': {
          keys: ['q'],
          callback: () => { this.emit('key', 'q') }
        }
      }
    })

    return widget
  }

  renderWidget () {
    return this.screen.append(this.widget)
  }
}

module.exports = myWidget
