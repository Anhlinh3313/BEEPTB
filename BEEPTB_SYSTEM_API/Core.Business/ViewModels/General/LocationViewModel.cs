using System;
namespace Core.Business.ViewModels
{
    public class LocationViewModel
    {
        public LocationViewModel()
        {
        }

        public int? Id { get; set; }
        public double CurrentLat { get; set; }
        public double CurrentLng { get; set; }
        public string Location { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
        public bool IsUpdate { get; set; }
        public int? UserId { get; set; }
    }
}
