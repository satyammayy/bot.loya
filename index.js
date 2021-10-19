const { create } = require('@open-wa/wa-automate');
const express = require("express")
function start(client) {
  client.onGlobalParticipantsChanged(async (event) => {
    const host = (await client.getHostNumber()) + '@c.us';
    if (event.action === 'add' && event.who !== host){
      client.sendTextWithMentions(
        event.chat,
        `✨Hello, Welcome to the group @${event.who.replace(
          '@c.us ✨',
          ''
        )} \n\n✨Wise app has to be  installed first! \n\n *Enroll first* \n\n ✨Material pamba singdo hwjik fw tak pada makha da leire \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to biology and topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `
      );
   await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [
            { id: 'button1', text: 'chapter1' },
            { id: 'button2', text: 'chapter2' },
          ],
          'Materials',
          '-Sir Loya'
        );
            
            
    await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [
            { id: 'button3', text: 'chapter3' },
            { id: 'button4', text: 'chapter4' },
          ],
          'Materials',
          '-Sir Loya'
        );
         
     await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [  
            
            { id: 'button5', text: 'chapter5' },
            { id: 'button6', text: 'chapter6' },
          ],
          'Materials',
          '-Sir Loya'
        );
             
    await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [ 
            { id: 'button7', text: 'chapter7' },
            { id: 'button8', text: 'chapter8' },
          ],
          'Materials',
          '-Sir Loya'
        );
          
     await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [ 
            { id: 'button9', text: 'chapter9' },
            { id: 'button10', text: 'chapter10' },
          ],
          'Materials',
          '-Sir Loya'
        );
          
     await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [
            { id: 'button11', text: 'chapter11' },
            { id: 'button12', text: 'chapter12' },
          ],
          'Materials',
          '-Sir Loya'
        );
            
     await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [
            { id: 'button13', text: 'chapter13' },
            { id: 'button14', text: 'chapter14' },
          ],
          'Materials',
          '-Sir Loya'
        );
  
     await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [
            { id: 'button15', text: 'chapter15' },
            { id: 'button16', text: 'chapter16' },
          ],
          'Materials',
          '-Sir Loya'
        );
  client.sendPtt(event.chat, 'https://github.com/Sirloya/sirloyav/raw/main/instructions_sirloya.mp3'); 
      
  }
  });


  client.onMessage(async (message) => {
   const command = (message.body || "").toLowerCase();
    
    switch(command){
      case 'alive?':
        client.sendText(message.from, ' _yes  i am aliveeee_ ');
      break;  
      case 'materials':
        await client.reply(message.from, '  Hello \n\n Dear unofficail whatsapp user ! \n\n Type exactly chapter2 to get *chapter 2* notes \n\n Type exactly chapter3 to get *chapter 3* notes \n\n and so on ', message.id);
        break;
      case 'chapter1':
        await client.sendText(message.from, 'This chapter has been removed and the syllabus for 2021 has not been updated yet!');
        break;
        
      case 'chapter2':
            client.sendFile(message.from, 'https://drive.google.com/uc?id=1X3GNKpA281sByjQpgDwWEw4ebi2-ITmV&export=download' , 'chapter2.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
         break;
         
       case 'chapter3':         
               client.sendFile(message.from, 'https://drive.google.com/uc?id=1h3BNg0-t7G8kx9X6HqhsMrm2a6RoeXA6&export=download' , 'chapter3.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
         break;
      case 'chapter4':
             client.sendFile(message.from, 'https://drive.google.com/uc?id=1ovSHWBOAJxXivp6WhW6TA9jc1LH9PzKA&export=download' , 'chapter4.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
          break;  
      case 'chapter5':
          client.sendFile(message.from, 'https://drive.google.com/uc?id=1hY5wsXJhgCCQCDhau3jBu2gHTPZOxPUF&export=download' , 'chapter5.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');
         client.sendFile(message.from, 'https://drive.google.com/uc?id=1qJU6qmOogVt1PaCiYS0CFR1dux-IGew6&export=download' , 'genetics-newest.pdf', 'check this pdf', null, true)
        client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');

          break;
      case 'chapter6':
          client.sendFile(message.from, 'https://drive.google.com/uc?id=1nHx_oHLiLACb1JdptYR38Rh-FQvyvKTs&export=download' , 'chapter6.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');
        client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
          break;
      case 'chapter7':
         await client.sendText(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ');
          break;
          //https://drive.google.com/file/d/1Dmxx5UK5_I26AXwPXkQmsrrCcakNOQpm/view?usp=sharing
      case 'chapter8':
        client.sendFile(message.from, 'https://drive.google.com/uc?id=1Dmxx5UK5_I26AXwPXkQmsrrCcakNOQpm&export=download' , 'chapter8-sir loya.pdf', 'check this pdf', null, true)
         await client.sendText(message.from, ' *sending* ........ it could take 1 or 2mins to send!');
         client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3'); 
         break;
      case 'chapter9':
         await client.sendText(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ');
          break;
          //https://drive.google.com/file/d/1pYXWwxCHGUbPOnKPbEuQfHja6hqZGL2P/view?usp=sharing
      case 'chapter10':
        client.sendFile(message.from, 'https://drive.google.com/uc?id=1pYXWwxCHGUbPOnKPbEuQfHja6hqZGL2P&export=download' , 'chapter10-sir loya.pdf', 'check this pdf', null, true)   
      await client.sendText(message.from, ' *sending* ........ it could take 1 or 2mins to send! ');
         client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
         break;
          //https://drive.google.com/file/d/16np1swAN_BZy74dHgb8spUnqLgTJ1iGH/view?usp=sharing
      case 'chapter11':
        client.sendFile(message.from, 'https://drive.google.com/uc?id=16np1swAN_BZy74dHgb8spUnqLgTJ1iGH&export=download' , 'chapter11-sir loya.pdf', 'check this pdf', null, true)
         await client.sendText(message.from, ' *sending* ........ it could take 1 or 2mins to send! '); 
         client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3'); 
         break;
        //https://drive.google.com/file/d/1cHXsPPrXgFoCQbCpGeA-szrqAeY8poWH/view?usp=sharing
        //https://drive.google.com/file/d/1DsbrcNfyoAZVjqJJQiFgBSVaHfjXIl99/view?usp=sharing
      case 'chapter12':
        client.sendFile(message.from, 'https://drive.google.com/uc?id=1cHXsPPrXgFoCQbCpGeA-szrqAeY8poWH&export=download' , 'chapter12-sir loya.pdf', 'check this pdf', null, true)
        client.sendFile(message.from, 'https://drive.google.com/uc?id=1DsbrcNfyoAZVjqJJQiFgBSVaHfjXIl99&export=download' , 'chapter12-(2nd)sir loya.pdf', 'check this pdf', null, true)
        await client.sendText(message.from, ' *sending* ........ it could take 1 or 2mins to send! '); 
         client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');  
          break;
      case 'chapter13':
         await client.sendText(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson '); 
          break;
      case 'chapter14':
         await client.sendText(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson '); 
          break;
      case 'chapter15':
         await client.sendText(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson '); 
          break;
       case 'chapter16':
         await client.sendText(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson '); 
          break;
                               
        case 'meetingid':
               await client.sendText(message.from, 'Wise app has to be installed first and enrollled ');
               break;
        case 'menu':
               await client.reply(message.from, ` Wise app has to be installed first and enrollled   \n\n ✨Material pamba singdo hwjik fw tak pada makha da leire \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type materials in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to biology and topics taught on class* ✨\n  _final words: if you want to show this message again, type 'menu' `, message.id);
   await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button1', text: 'chapter1' },
            { id: 'button2', text: 'chapter2' },
          ],
          'Materials',
          '-Sir Loya'
        );
            
            
    await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button3', text: 'chapter3' },
            { id: 'button4', text: 'chapter4' },
          ],
          'Materials',
          '-Sir Loya'
        );
         
     await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [  
            
            { id: 'button5', text: 'chapter5' },
            { id: 'button6', text: 'chapter6' },
          ],
          'Materials',
          '-Sir Loya'
        );
             
    await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [ 
            { id: 'button7', text: 'chapter7' },
            { id: 'button8', text: 'chapter8' },
          ],
          'Materials',
          '-Sir Loya'
        );
          
     await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [ 
            { id: 'button9', text: 'chapter9' },
            { id: 'button10', text: 'chapter10' },
          ],
          'Materials',
          '-Sir Loya'
        );
          
     await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button11', text: 'chapter11' },
            { id: 'button12', text: 'chapter12' },
          ],
          'Materials',
          '-Sir Loya'
        );
            
     await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button13', text: 'chapter13' },
            { id: 'button14', text: 'chapter14' },
          ],
          'Materials',
          '-Sir Loya'
        );
  
     await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button15', text: 'chapter15' },
            { id: 'button16', text: 'chapter16' },
          ],
          'Materials',
          '-Sir Loya'
        );   
       
     client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/instructions_sirloya.mp3');    
        
         break;
     

        
    }
  
    try{
    let {body, caption} = message
    const content = caption || body || ''
    const command = content.toLowerCase().split(' ')[0] || ''
    console.log(`Body: ${body}\n\nCaption: ${caption}\n\nContent: ${content}\n\nCommand: ${command}`)
}catch(error){
    console.log(`Error:\n${error}`)
}


    
  });
}
create({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  browserRevision: '737027',
}).then((client) => start(client));


const app = express();

app.get('/', (req, res) => res.status(200).send('xd'));
app.listen(process.env.PORT || 80);
