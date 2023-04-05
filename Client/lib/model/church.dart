// To parse this JSON data, do
//
//     final church = churchFromJson(jsonString);

import 'dart:convert';

Church churchFromJson(String str) => Church.fromJson(json.decode(str));

String churchToJson(Church data) => json.encode(data.toJson());

class Church {
    Church({
        required this.id,
        required this.name,
        required this.description,
        required this.architectural,
        required this.style,
        required this.location,
        required this.image360,
        required this.images,
    });

    final String id;
    final String name;
    final String description;
    final String architectural;
    final String style;
    final String location;
    final String image360;
    final List<Image> images;

    factory Church.fromJson(Map<String, dynamic> json) => Church(
        id: json["id"],
        name: json["name"],
        description: json["description"],
        architectural: json["architectural"],
        style: json["style"],
        location: json["location"],
        image360: json["image360"],
        images: List<Image>.from(json["images"].map((x) => Image.fromJson(x))),
    );

    Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "description": description,
        "architectural": architectural,
        "style": style,
        "location": location,
        "image360": image360,
        "images": List<dynamic>.from(images.map((x) => x.toJson())),
    };
}

class Image {
    Image({
        required this.image,
    });

    final String image;

    factory Image.fromJson(Map<String, dynamic> json) => Image(
        image: json["image"],
    );

    Map<String, dynamic> toJson() => {
        "image": image,
    };
}
