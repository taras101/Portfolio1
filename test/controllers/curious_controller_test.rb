require 'test_helper'

class CuriousControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
