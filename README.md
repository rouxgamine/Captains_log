# Captains_log

Restful Routes

|#| Action | URL | HTTP Verb| JSX view filename| Mongoose method |
|-|-|-|-|-|-|
| 1 | Index |/logs/| GET | Index.jsx | Log.find() |
| 2 | Show | /logs/:id | GET | Show.jsx | Log.findOne or Log.findById |
| 3 | New | /logs/new | GET | New.jsx | none |
| 4 | Create | /logs/ | POST | none | Log.create(req.body) |
| 5 | Edit | /logs/:id/edit | GET | Edit.jsx | Log.findOne or Log.findById |
| 6 | Update | /logs/:id | PUT/PATCH | none | Log.findByIdAndUpdate or Log.findOneAndUpdate|
| 7 | Delete | /logs/:id | DELETE  | none | Log.findByIdAndDelete or Log.findByIdAndRemove|
