String.prototype.capitalize = function() {
  if(this.length <= 0) {
    return '';
  }

  return `${this[0].toUpperCase()}${this.substr(1)}`;
}

