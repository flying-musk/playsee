let volume = 0

let volumeListeners: Array<() => void> = []

export const volumeStore = {
  mute() {
    volume = 0
    emitVolumeChange()
  },
  unmute() {
    volume = 1
    emitVolumeChange()
  },
  toggle() {
    volume = volume === 0 ? 1 : 0
    emitVolumeChange()
  },
  subscribe(listener: () => void) {
    volumeListeners = [...volumeListeners, listener]
    return () => {
      volumeListeners = volumeListeners.filter(l => l !== listener)
    }
  },
  getSnapshot() {
    return volume
  }
}

function emitVolumeChange() {
  for (let listener of volumeListeners) {
    listener()
  }
}

let playState: 'playing' | 'paused' = 'playing'

let isPlayingListeners: Array<() => void> = []

export const playStateStore = {
  play() {
    playState = 'playing'
    emitPlayStateChange()
  },
  pause() {
    playState = 'paused'
    emitPlayStateChange()
  },
  subscribe(listener: () => void) {
    isPlayingListeners = [...isPlayingListeners, listener]
    return () => {
      isPlayingListeners = isPlayingListeners.filter(l => l !== listener)
    }
  },
  getSnapshot() {
    return playState
  }
}

function emitPlayStateChange() {
  for (let listener of isPlayingListeners) {
    listener()
  }
}
