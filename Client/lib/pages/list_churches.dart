import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../model/church.dart';

class ListChurches extends StatefulWidget {
  const ListChurches({super.key});

  @override
  State<ListChurches> createState() => _ListChurchesState();
}

class _ListChurchesState extends State<ListChurches> {
  Future<Church?> _churchData() async{
    String url="http://localhost:3001/church/69ab3f19-d9dc-48f3-b6fb-dd27d59f4e24";
    final http.Response response = await http.get(Uri.parse(url));
    if(response.statusCode == 200){
      print(response.body);
      return compute(churchFromJson,response.body);
    }
    return compute(churchFromJson,response.body);
  }
  @override
  Widget build(BuildContext context) {
    return(
      Scaffold(body: Column(children: [
        SizedBox(width: 300, height: 300, child:FutureBuilder(future: _churchData(), builder: (context, snapshot){
          if(snapshot.connectionState==ConnectionState.waiting){
            return Center(
              child: CircularProgressIndicator(),
            );
          }else{
            final Church? data=snapshot.data;
            if(data==null){
              return Text("NO HAY NOMBRE PERRO");
            } else{
              return Text(data.name);
            }
            // return Text(data?.name ?? "sin nada ") ;
          }
        },) ,)
      ],),)
    );
  }
}


