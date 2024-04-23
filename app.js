// Function to append GIF to the page
function appendGif(gifUrl) {
  const img = $('<img>');
  img.attr('src', gifUrl);
  $('#gifsContainer').append(img);
}


// Add event listener for form submission
$('#searchForm').submit(function(e) {
    e.preventDefault();

    const searchTerm = $('#searchTerm').val();

    axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'YEigLnzy4LRbeLM6XRyg3XBEgUwHsEtx',
            limit: 10
        }
    }).then(function(res) {
        // Check if response data exists and has GIFs
        if (res.data && res.data.data.length > 0) {
            const gifUrl = res.data.data[0].images.original.url;
            appendGif(gifUrl);
        } else {
            console.log('No GIFs found for the search term:', searchTerm);
        }
    }).catch(function(error) {  
        console.error('Error fetching data:', error);
    });
});

// Event listener for remove GIFs button click
$('#removeGifs').click(function() {
    $('#gifsContainer').empty();
});


  
