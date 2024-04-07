document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById('uploadForm');
    const uploadBtn = document.getElementById('uploadBtn');

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const filename = document.getElementById('filename').value;
        const password = document.getElementById('password').value;

        if (filename && password === 'cgOMOjwEaXc1bkDXFijhAW3fKM0E9H') {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            const formData = new FormData();
            formData.append('file', file);

            fetch(filename, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('File uploaded successfully!');
                    window.location.href = filename;
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to upload file.');
            });
        } else {
            alert('Invalid filename or admin password.');
        }
    });

    document.getElementById('fileInput').addEventListener('change', function() {
        const file = this.files[0];
        const preview = document.getElementById('preview');
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(file);
    });
});
