// variables
const timeBox=document.getElementById('time');
const dateBox=document.getElementById('date');
const body=document.querySelector('body');
let displaySeconds=true;
let displayDate=true;
const bgs=['nature', 'city', 'sky', 'constructionsAndVehicles'];
let bg=0;
const bgsNr=[60, 60, 15, 15];
let date=new Date();
function tick()
{
	date=new Date();
	let day=date.getDate();
	let month=date.getMonth()+1;
	let year=date.getFullYear();
	let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
	if(day<10) day='0'+day;
	if(month<10) month='0'+month;
	if(hour<10) hour='0'+hour;
	if(minute<10) minute='0'+minute;
	if(second<10) second='0'+second;
	timeBox.innerHTML=hour+':'+minute;
	if(displaySeconds) timeBox.innerHTML+=':'+second;
	dateBox.innerHTML=day+'.'+month+'.'+year;
	if(second==0) updateBg();
}
function updateBg()
{
	let folderName=bgs[bg];
	let imgNr=date.getMinutes()%bgsNr[bg];
	body.style.backgroundImage='url(backgrounds/'+folderName+'/'+imgNr+'.jpg)';
}
updateBg();
tick();
// ticking
setInterval(tick, 1000);
// buttons
btns=[];
for(let i=0;i<bgs.length;i++)
{
	btns[i]=document.getElementById(bgs[i]+'Btn');
	btns[i].addEventListener('click', function(){btns[bg].className='';bg=i;this.className='chosen';updateBg()});
}
document.getElementById('secondsBtn').addEventListener('click', function(){displaySeconds=!displaySeconds;if(displaySeconds) this.className='chosen'; else this.className='';tick()});
document.getElementById('dateBtn').addEventListener('click', function(){displayDate=!displayDate;if(displayDate){this.className='chosen';dateBox.style.color='white'}else{this.className='';dateBox.style.color='transparent'}tick()});