

## Database Schema

### Notes Table Structure
| Column       | Type       | Description                          |
|--------------|------------|--------------------------------------|
| id           | UUID       | Primary key (auto-generated)         |
| user_id      | UUID        | References auth.users                |
| title        | VARCHAR(100)| Note title (required)               |
| content      | TEXT       | Note body content                    |
| is_pinned    | BOOLEAN    | Pinned status (default: false)       |
| is_archived  | BOOLEAN    | Archived status (default: false)     |
| created_at   | TIMESTAMPTZ| Creation timestamp                   |
| updated_at   | TIMESTAMPTZ| Last update timestamp                |
| tags         | TEXT[]     | Array of tags (default: empty array) |

### Design Philosophy

1. **Security First**
   - Every note is private by default
   - Strict ownership checks via RLS
   - No direct table access - only through API

2. **Performance Conscious**
   - Indexes on all common query paths
   - Efficient data types selected
   - Ready for scaling with partitioning

3. **User Experience Focused**
   - Pinning/archiving for organization
   - Tags for categorization
   - Automatic timestamps for sorting

4. **Extensible Architecture**
   - Prepared for future features:
     - Public sharing
     - Advanced search
     - Collaborative editing