import './tod.css'
import closeit from './Images/close.svg'
import deleit from './Images/delete.svg'
import { format } from 'date-fns'

format(new Date(4, 5, 24), "mm-dd-yyyy")


export const dialogbox = (taskCard) =>{
     taskCard = document.createElement('div');
     taskCard.setAttribute('id', 'thecard');
     const taskname = document.createElement('p');
     taskname.textContent = addinput.value;
     taskCard.appendChild(taskname);

        const dialog = document.createElement('dialog');
        dialog.setAttribute('id','task');
            const fieldset = document.createElement('fieldset');
            fieldset.setAttribute('id','formname');
                const taskform = document.createElement('form');
                taskform.setAttribute('method','dialog');
                taskform.setAttribute('id','form');
                    const legend = document.createElement('legend');
                    legend.textContent = addinput.value;
                taskform.appendChild(legend);
                    const fieldsetradio = document.createElement('fieldset');
                    fieldsetradio.setAttribute('id','checkboxes');
                       fieldsetradio.innerHTML = 
                       `<legend>Priority:</legend>

                       <div>
                         <input type="radio" id="none" name="priority" value="none" checked />
                         <label for="none">none</label>
                       </div>

                       <div>
                         <input type="radio" id="low" name="priority" value="low" />
                         <label for="low">!</label>
                       </div>
                     
                       <div>
                         <input type="radio" id="medium" name="priority" value="medium" />
                         <label for="medium">!!</label>
                       </div>
                     
                       <div>
                         <input type="radio" id="high" name="priority" value="high" />
                         <label for="high">!!!</label>
                       </div>
                     </fieldset>`
                taskform.appendChild(fieldsetradio);
                    const descriptionlabel = document.createElement('label');
                    descriptionlabel.setAttribute('for','description');
                    descriptionlabel.textContent = 'Notes';
                taskform.appendChild(descriptionlabel);
                    const descriptiontext = document.createElement('textarea');
                    descriptiontext.setAttribute('name','description');
                    descriptiontext.setAttribute('id','description');
                taskform.appendChild(descriptiontext);
                    const submit = document.createElement('Button');
                    submit.setAttribute('class','close');
                    submit.addEventListener('click',(e)=>{
                        dialog.close()
                    })
                        const closes = document.createElement('img');
                        closes.setAttribute('src', closeit)
                    submit.appendChild(closes)
                taskform.appendChild(submit);
                    const deleted =  document.createElement('Button');
                    deleted.setAttribute('id','delete')
                    deleted.addEventListener('click',()=>{
                        deleted.parentNode.parentNode.parentNode.parentNode.remove()
                    })
                        const deleteit = document.createElement('img');
                        deleteit.setAttribute('src', deleit );
                    deleted.appendChild(deleteit)
                taskform.appendChild(deleted);
            fieldset.appendChild(taskform);
        dialog.appendChild(fieldset);
    taskCard.appendChild(dialog);
    taskCard.addEventListener('click',()=>{
        dialog.show()
    })
    move(dialog,descriptiontext);
document.querySelector('#dashboard').appendChild(taskCard);
}
const addinput = document.createElement('input');
document.querySelector('header').appendChild(addinput);
addinput.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        if(addinput.value !== ''){
        e.defaultPrevented;
        dialogbox(addinput.value)
        addinput.value =''
    }}
})
const move = (moved,exception) =>{
    let move  = document.querySelector('body'),
    x=0 , 
    y=0,
    mousedown = false;
    moved.addEventListener('mousedown',(e)=>{
    // set mouse state to true 
    if(e.target !== exception){
    mousedown = true; 
    // subtract offset 
    x = moved.offsetLeft - e.clientX; 
    y = moved.offsetTop - e.clientY; 
    e.preventDefault(); // prevent browser's default drag behavior 
    }}, true);

    document.addEventListener('mouseup', (e)=> { // Notice the change here 
        // set mouse state to false 
        mousedown = false; 
    }, true); 

    move.addEventListener('mousemove', (e)=> { 
        // Is mouse pressed? 
        if (mousedown) { 
            // now we calculate the difference 
            moved.style.left = e.clientX + x + 'px'; 
            moved.style.top = e.clientY + y + 'px'; 
        } 
    }, true); 
}
const dudate = (card,month,day,year)=>{
    card.textContent = `${new Date(month,day,year)}`
}


const creatediv = (name,parent) =>{
    name = document.createElementl('div');
    parent.appendChild(name);
        const addtext = (text)=>{
            name.textcontent = text;
        return {addtext}
    }
}
const createInput = (name,type,parent) =>{
    name = document.createElement('input');
    name.setAttribute('type',`${type}`);
    parent.appendChild(name);
}
createInput(`test`,`text`,document.querySelector('body'))