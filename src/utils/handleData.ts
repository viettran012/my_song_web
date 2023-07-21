const handleData = {
  shuffle: function (array: any[]) {
    if (typeof array != "object") return array
    const array_ = [...array]
    let currentIndex = array_.length,
      randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array_[currentIndex], array_[randomIndex]] = [
        array_[randomIndex],
        array_[currentIndex],
      ]
    }

    return array_
  },
}

export default handleData
