// {
//     "AWSEBDockerrunVersion": 2,
//     "containerDefinitions": [
//         {
//             "name": "client",
//             "image": "401940/multi-client",
//             "hostname": "client",
//             "essential" : false
//         },
//         {
//             "name": "server",
//             "image": "401940/multi-server",
//             "hostname": "api",
//             "essential": false
//         },
//         {
//             "name": "worker",
//             "image": "401940/multi-worker",
//             "hostname": "worker",
//             "essential": false
//         },
//         {
//             "name": "nginx",
//             "image": "401940/multi-nginx",
//             "hostname": "nginx",
//             "essential": true,
//             "portMappings": [
//                 {
//                     "hostPort": 80,
//                     "containerPort": 80
//                 }
//             ],
//             "links" : ["client","server"]
//         }
//     ]
// }
