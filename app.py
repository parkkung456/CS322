from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np
from keras.preprocessing import image
import io
import tensorflow as tf
from flask_cors import CORS

app = Flask(__name__)
model = load_model('savedmodel.h5')
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = tf.keras.applications.mobilenet_v3.preprocess_input(img_array)
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    try:
        image_data = request.files['image'].read()
        img_array = preprocess_image(io.BytesIO(image_data))
        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction, axis=1)[0]
        class_names = {0: 'composable', 1: 'general', 2: 'hazardous', 3: 'recycle'}  # Update with your actual class names
        predicted_class_name = class_names[predicted_class]
        return jsonify({'class': predicted_class_name})
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/')
def home():
    return 'Welcome to the Flask API!'

if __name__ == '__main__':
    app.run(debug=True)
