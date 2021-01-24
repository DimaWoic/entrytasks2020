var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

function groupCollections(){
    let col = { id: '',
                name: '',
                posts: [{id: '',
                        title: '',
                        text: '',}
                       ]            
              };
    let arr = []
    for (let m = 0; m < model.length; m++){
         let user_id = model[m].user.id;
         let user_name = model[m].user.name;
         let user_post_id = model[m].id;
         let user_post_title = model[m].title;
         let user_post_text = model[m].text;
         if (arr.length === 0){
            col.id = user_id;
            col.name = user_name;
            col.posts[0].id = user_post_id;
            col.posts[0].title = user_post_title;
            col.posts[0].text = user_post_text;
            arr.push(col);
        }
         for (let a=0; a<arr.length; a++){
             if (user_id === arr[a].id){
                 if (arr[a].posts[arr[a].posts.length - 1].id != user_post_id){
                        col.posts.push({id:user_post_id, title: user_post_title, text: user_post_text});
                 }                          
             }
             else if (user_id < arr[a].id) {
                col.id = user_id;
                col.name = user_name;
                col.posts.push({id:user_post_id, title: user_post_title, text: user_post_text});
                arr.unshift(col);
             }
         }
    }
    return arr;
  }
  
  console.log(groupCollections())