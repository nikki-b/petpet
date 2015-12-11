var PetBox = React.createClass({
	getInitialState: function() {
		return {
				face: "(ȌᴥȌ)",
				message: "",
				love: 0,
				happiness: 50,
				energy: 50,
				satiety: 50,
				meals: 5,
				gameOver: false
		}
	},
	eat: function() {
		if (this.state.meals > 0) {
			this.setState({
				face: "( ȌᴥȌ)っ ࿉",
				message: "you fed petpet!",
				meals: this.state.meals -= 1,
				satiety: this.state.satiety += 10
			});
		} else {
			this.setState({
				face: "(⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟ",
				message: "you don't have any food for petpet!"
			})
		}
		this.checkStatus();
	},
	sleep: function() {
		this.setState({
			face: "(≚ᄌ≚)ƶƵ",
			message: "petpet is taking a nap.",
			energy: this.state.energy += 10,
			happiness: this.state.happiness -= 5
		});
		this.checkStatus();
	},
	play: function() {
		var rand = Math.random();
		if (rand > 0.5) {
			this.setState({
				face: "(ȌᴥȌ)ρ┳┷┳゜σ(^o^)",
				message: "playing ping pong with petpet!",
				happiness: this.state.happiness += 10,
				energy: this.state.energy -= 5
			});
		} else {
			this.setState({
				face: "|Ȍ∩Ȍ)",
				message: "petpet doesn't want to play.",
				happiness: this.state.happiness -= 5
			})
		}
		this.checkStatus();
	},
	pet: function() {
		var rand = Math.random();
		if (rand > 0.5) {
			this.setState({
				face: "ღˇ◡ˇ(꒶̮ȌᴥȌ)",
				message: "petting petpet!",
				love: this.state.love += 10
			})
		} else {
			this.setState({
				face: "|Ȍ∩Ȍ)",
				message: "petpet doesn't want to be petted!",
				love: this.state.love -= 5
			});
		}
		this.checkStatus();
	},
	checkStatus: function() {
		if(this.state.happiness >= 100 & this.state.energy >= 100 && this.state.satiety >= 100 && this.state.love >= 100) {
			this.setState({
				face: "(๑˃̵ᴗ˂̵)و Yay! ━ (♥ᴥ♥)",
				message: "winner! your petpet loves you~~~!!",
				gameOver: true
			})
		} else if(this.state.happiness <= 0 & this.state.energy <= 0 && this.state.satiety <= 0 && this.state.love <= 0) {
			this.setState({
				face: "o(╥﹏╥)o NOOOooooo━ (XᴥX)",
				message: "omg petpet died!!",
				gameOver: true
			})
		}
	},
	playAgain: function() {
		this.replaceState(this.getInitialState());
	},
	render: function() {
		return ( 
			<div className='container'>
				<h3 className='title text-center'>
					<span> &nbsp;♥₍ ᐢ• ﻌ• ᐢ₎｡ petpet｡₍ ᐢ• ﻌ• ᐢ₎♥ &nbsp; </span>
				</h3>
				<div className='well clearfix col-sm-6 col-sm-offset-3 text-center'>
					<div className = 'panel panel-info'>
						<div className = 'panel-heading'>
							<h3 className = 'panel-title'>
								Happiness: { this.state.happiness } | Energy: { this.state.energy } | Fullness: { this.state.satiety } | Love: { this.state.love } 
							</h3>
							<h5> get petpet to 100 on all stats! </h5>
						</div>
						<div className='panel-body petbox'>
							<p className="face"> { this.state.face } </p>
							<div className='message'> 
								{ this.state.message } 
							</div>
						</div >
					</div> 
					{ this.state.gameOver ? 
							<button className='btn btn-success' onClick={ this.playAgain } > Play Again </button> 
						: 
							<span>
								<div className='btn-group'>
									<button className='btn btn-primary btn-lg' onClick={ this.eat }> Eat </button>
									<button className='btn btn-warning btn-lg' onClick={ this.sleep }> Sleep </button>
									<button className='btn btn-info btn-lg' onClick={ this.play }> Play </button>
									<button className='btn btn-success btn-lg' onClick={ this.pet }> Pet </button>
								</div> 
								&nbsp; <button className='btn btn-danger btn-lg' onClick={ this.playAgain }> Restart </button>
							</span>
						} 
				</div>
			</div >
		);
	}
})

ReactDOM.render( 
	<PetBox/> ,
	document.getElementById("container")
)