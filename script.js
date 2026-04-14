let features = [
    { id: 1, name: "Edit Button", votes: 10 },
    { id: 2, name: "Voice Messages", votes: 5 },
    { id: 3, name: "Video Calls", votes: 8 },
    { id: 4, name: "Dark Theme", votes: 12 },
    { id: 5, name: "Custom Emojis", votes: 3 }
];

const board = document.getElementById('board');
const input = document.getElementById('featureInput');
const btn = document.getElementById('addBtn');

function showFeatures() {
    features.sort((a, b) => b.votes - a.votes);
    board.innerHTML = '';
    
    for (let i = 0; i < features.length; i++) {
        let f = features[i];
        let div = document.createElement('div');
        div.innerHTML = f.name + " - " + f.votes + " <button onclick='addVote(" + f.id + ")'>Upvote</button>";
        board.appendChild(div);
    }
    localStorage.setItem('data', JSON.stringify(features));
}

function addVote(id) {
    for (let i = 0; i < features.length; i++) {
        if (features[i].id == id) {
            features[i].votes = features[i].votes + 1;
        }
    }
    showFeatures();
}

btn.onclick = function() {
    let obj = {
        id: Math.random(),
        name: input.value,
        votes: 0
    };
    features.push(obj);
    input.value = '';
    showFeatures();
};

if (localStorage.getItem('data')) {
    features = JSON.parse(localStorage.getItem('data'));
}

showFeatures();
