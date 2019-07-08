## Memento Mori Universitas Project

This dashboard provides an easy way to link back to what I am learning. It features JIRA style swimlanes to track my progress
as well as Pomodoro tool.

### Database

The following is the structure of each project being created

```
{
  "_id": {"$oid":"5c8eaaa2246320a756ef64d2"},
  "createdAt": {"$date":{"$numberLong":"1552839266802"}},
  "name": "Learning French",
  "description": "Learning basic conversational french",
  "uploaded": true,
  "path": "https://github.com/memento-mori-universitas/learning-french"
}
```

### Initial UI Design

![Dashboard View](https://user-images.githubusercontent.com/1566236/56462103-4cb44f80-638b-11e9-8259-14d0b8e0c937.png)
![Add Courses Component](https://user-images.githubusercontent.com/1566236/56462102-4cb44f80-638b-11e9-8aac-58952b05fdc3.png)
![Dashboard View - Pomodoro](https://user-images.githubusercontent.com/1566236/56462101-4cb44f80-638b-11e9-9e4b-ddb2662ebcc8.png)

### Deployment with GCP

<img width="836" alt="image" src="https://user-images.githubusercontent.com/1566236/57993924-f8cf8000-7a88-11e9-9504-47b14e85c82d.png">

## Versions

### [1.3.1] - 2019/07/08
### Added
- Network indicator
- Updated packages

### [1.3.0] - 2019/06/07
### Fix
- Replaced Express with Fastify
### Added
- Add caching strategies to improve performance
- Add manifest file

### [1.2.2] - 2019/06/06
### Added
- Added lock UI component
- Improved dashboard color

### [1.2.1] - 2019/05/27
### Added
- Error component

### [1.2.0] - 2019/05/25
### Added
- Offline support with next-offline

### [1.1.0] - 2019/05/25
### Added
- Add dialog for application feedback

### [1.0.0] - 2019/05/22
### Added
- Initial Release