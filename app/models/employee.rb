class Employee < ActiveRecord::Base

  belongs_to :manager, class_name: "Employee"
  has_many :directs, class_name: "Employee", foreign_key: "manager_id"

  def manager_name
    manager.try(:lastname)
  end

  def has_manager?
    manager.present?
  end

  def has_directs?
    directs.exists?
  end
     
end
