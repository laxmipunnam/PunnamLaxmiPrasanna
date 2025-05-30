has_high_income=True
has_good_credit=True
if has_high_income and has_good_credit: # for 'and' both should be true
    print("eligible for loan")
if has_high_income or has_good_credit: # for 'or' at least one true
    print("eligible for  the loan")
if has_high_income and not has_good_credit:
    print("ok eligible for loan")