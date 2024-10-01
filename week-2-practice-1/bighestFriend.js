var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let BigFriend=friends[0];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element.length > BigFriend.length) {
        BigFriend = element;
    }

    
}
console.log(BigFriend);