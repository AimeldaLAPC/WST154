function generateStory(e) {
    e.preventDefault();

    let personName = document.getElementById('personName').value;
    let place = document.getElementById('place').value;
    let itemCount = document.getElementById('itemCount').value;
    let item = document.getElementById('item').value;
    let friendName = document.getElementById('friendName').value;
    let givenAway = document.getElementById('givenAway').value;
    let found = document.getElementById('found').value;

    let finalCount = Number(itemCount) - Number(givenAway) + Number(found);

    let story = `
    One day, ${personName} traveled to ${place} carrying ${itemCount} ${item}.
    While exploring ${place}, ${personName} met ${friendName}.
    ${friendName} was excited to see so many ${item}, so ${personName} shared
    ${givenAway} ${item} with ${friendName}. Later, ${personName} discovered
    ${found} more ${item} hidden near a tree in ${place}. At the end of the day,
    ${personName} counted the ${item} and found there were ${finalCount} left.
    ${personName} and ${friendName} had a wonderful adventure in ${place}.
    `;

    document.getElementById('story').innerText = story;
}

document.getElementById('storyForm').addEventListener('submit', generateStory);
