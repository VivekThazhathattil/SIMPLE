let cl = console.log;
let ce = console.error;
let ca = console.assert;

class Info{
	constructor(
		length,
		breadth,
		mesh_x,
		mesh_y,
		mu,
		rho,
		omega_u,
		omega_v,
		omega_p,
		outer_iterations,
		iter_u,
		iter_v,
		iter_p
	)
	{
		this.length = length;
		this.breadth = breadth;

		this.mesh_x = mesh_x;
		this.mesh_y = mesh_y;

		this.dx = this.length / this.mesh_x;
		this.dy = this.breadth / this.mesh_y;

		/* fluid properties */
		this.mu = mu;
		this.rho = rho;

		/* iteration parameters and relaxation factors */
		this.omega = {
			u : omega_u,
			v : omega_v,
			p : omega_p
		};

		this.outer_iterations = outer_iterations;
		this.iter = {
			u : iter_u,
			v : iter_v,
			p : iter_p
		}
	}
};
/*--------------------------------------------------*/
function zeros(m, n){
	return fillWithValues(m, n, 0);
}
function ones(m, n){
	return fillWithValues(m, n, 1);
}
/* returns 1d array with same value 'val' if n == 1, else returns 2d array */
function fillWithValues(m, n, val){
	let res = [];
	for(let i = 0; i < m; i++){
		if(n != 1)
			res.push([]);
		for(let j = 0; j < n; j++){
			if(n != 1)
				res[i].push(val);
			else
				res.push(val);
		}
	}
	return res;
}

function init(){
	const info = new Info(1, 1, 60, 60, 1, 1000, 0.7, 0.7, 0.3, 1000, 10, 10, 100);
	let u = zeros(info.mesh_y + 2, info.mesh_x + 1);
	let v = zeros(info.mesh_y + 1, info.mesh_x + 2);
	let u_old = zeros(info.mesh_y + 2, info.mesh_x + 1);
	let v_old = zeros(info.mesh_y + 1, info.mesh_x + 2);

	let p_prime = zeros(info.mesh_y + 2, info.mesh_x + 2);
	let pressure = zeros(info.mesh_y + 2, info.mesh_x + 2);
	let apu = ones(info.mesh_y + 2, info.mesh_x + 2);
	let apv = ones(info.mesh_y + 2, info.mesh_x + 2);
	let app = ones(info.mesh_y + 2, info.mesh_x + 2);
	//cl(info,u,v,u_old,v_old);
	let ae = zeros(info.mesh_y + 2, info.mesh_x + 2);
	let as = zeros(info.mesh_y + 2, info.mesh_x + 2);
	let an = zeros(info.mesh_y + 2, info.mesh_x + 2);
	let aw = zeros(info.mesh_y + 2, info.mesh_x + 2);

	let source = zeros(info.mesh_y + 2, info.mesh_x + 2);
}
init();


