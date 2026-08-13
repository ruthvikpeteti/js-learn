#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int> nums={3,4,1,5,3,-5};
    int k=8;
    vector<int> vec;
    k=k%nums.size();
    for(int i=0;i<k;i++)
    {
        vec.push_back(nums[i]);
    }
    for(int i =k;i<nums.size();i++)
    {
        nums[i-k]=nums[i];
    }
    for(int i=1;i<=vec.size();i++)
    {
        nums[nums.size()-i]=vec[vec.size()-i];
    }
    for(auto it : nums)
    {
        cout<<it<<endl;
    }


}
