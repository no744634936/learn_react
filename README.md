写component的时候一定要先写render方法里的html，然后再写其他的，这样比较有思路


 render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
