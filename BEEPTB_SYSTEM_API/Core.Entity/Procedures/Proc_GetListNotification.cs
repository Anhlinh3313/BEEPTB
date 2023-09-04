using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListNotification : IEntityProcView
    {
        public const string ProcName = "Proc_GetListNotification";

        public int Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public bool? Seen { get; set; }
        public int? UserId { get; set; }
        public int? NotificationTypeId { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListNotification()
        {

        }

        public static IEntityProc GetEntityProc(int currentUserId, int? pageNumber, int? pageSize, int? notificationTypeId, bool? isSeen)
        {
            SqlParameter CurrentUserId = new SqlParameter("@CurrentUserId", currentUserId);

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            SqlParameter NotificationTypeId = new SqlParameter("@NotificationTypeId", notificationTypeId);
            if (!notificationTypeId.HasValue)
                NotificationTypeId.Value = DBNull.Value;

            SqlParameter Seen = new SqlParameter("@Seen", isSeen);
            if (!isSeen.HasValue)
                Seen.Value = DBNull.Value;
            
            return new EntityProc(
                $"{ProcName} @CurrentUserId, @PageNumber, @PageSize, @NotificationTypeId, @Seen",
                new SqlParameter[]
                {
                    CurrentUserId,
                    PageNumber,
                    PageSize,
                    NotificationTypeId,
                    Seen
                }
                );
        }
    }
}
